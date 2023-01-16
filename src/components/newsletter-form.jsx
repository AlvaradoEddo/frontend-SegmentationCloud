import React from 'react'
import classnames from 'clsx'
import { useNavigate } from 'react-router-dom';

const imageMimeType = /image\/(png|jpg|jpeg|tif)/i;

export function NewsletterForm({ className, onSubmit, submitBtn }) {
  const navigate = useNavigate();
  const [file, setFile] = React.useState('')
  const [success, setSuccess] = React.useState(false)
  const [fileDataURL, setFileDataURL] = React.useState(null)
  var xhr = new XMLHttpRequest();


  async function handleSubmit(event) {
    event.preventDefault()
    const result = await onSubmit(file)
    console.log(result)

    
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });
    xhr.open('POST', 'localhost:8000/uploadfile', true);
    var data = new FormData();
    data.append("file", file);
    xhr.send(file);

    setFile('')
    setSuccess(true)
    navigate("/image")
  }

  function handleChange(event) {
    const file = event.target.files[0];
    console.log(file.name);
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    console.log("dentro")
    setFile(file);
  }

  React.useEffect(() => {
    let fileReader = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result) {
          setFileDataURL(result)
        }
      }
      fileReader.readAsDataURL(file);
    }
    return () => {
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [file]);

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className={classnames('newsletter-form is-revealing md:flex', className)}
    >
      <div className="mr-2 flex-shrink flex-grow">
        <label className="hidden" htmlFor="file" aria-hidden="true">
          Email
        </label>
        <input
          required
          placeholder="Your best email&hellip;"
          id="file"
          name="file"
          type="file"
          onChange={handleChange}
          autoComplete="off"
          multiple="true"
          accept='.png, .jpg, .jpeg, .tif'
          className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
        />

        {/* {success && (
          <div className="mt-2 text-xs italic text-gray-500">
            Imagen subida con Exito!
          </div>
        )} */}
      </div>

      <div className="control">
        <button
          className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
          type="submit"
        >
          {submitBtn || 'Submit'}
        </button>
      </div>
    </form>
    {fileDataURL ?
      <p className="img-preview-wrapper">
        {
          <img src={fileDataURL} alt="preview" />
        }
      </p> : null}
      </>

  )
}
