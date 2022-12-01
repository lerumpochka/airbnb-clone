import { useState } from "react"



export default  function ImageUpload(props) {
  const [url, setUrl] = useState("")

  // onchange fn , when we upload img 
  const handleChange = async (event) => {

    // select uploaded file infos
    const imageInput = event.target

    //create form data to sent img
    //new FormData - format we use to upload files in the body of req
    //need to append configuration
    const imageFormData = new FormData()
    imageFormData.append('file', imageInput.files[0])
    imageFormData.append('upload_preset', 'unsigned_upload')

    // send img as a post to cldnr
    //wait for response
    const responseCloudinary = await fetch('https://api.cloudinary.com/v1_1/dzvox0kev/image/upload',{
      method: "POST",
      body: imageFormData
    })
    const responseCloudinaryData = await responseCloudinary.json()
    //get url from response
    const imageUrl = responseCloudinaryData.secure_url

    //set url to cldnr ing url
    setUrl(imageUrl)
  }

  


  return (
    <>
      <div >
        <label htmlFor="image">Upload an Image</label>
        <input type="file" accept=".jpg, .png, .jpeg" name="image" id="image" onChange={handleChange} />
        <input hidden={true} name="imgSrc" id="imgSrc" defaultValue={url} />
      </div>
    </>
  )
}
