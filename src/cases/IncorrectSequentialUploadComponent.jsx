import React from 'react'
import { getRandomNumber } from '../utils'

function IncorrectSequentialUploadComponent() {
  const [uploading, setUploading] = React.useState(false);
  const [items, setItems] = React.useState([getRandomNumber(), getRandomNumber()]);

  const startUpload = async () => {
    if (uploading) return
    window.customConsoleLog('items', items)
    setUploading(true)

    const uploadProcess = async (index) => {
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          window.customConsoleLog('complete upload item', items[index])
          if (index < items.length - 1) {
            await uploadProcess(index + 1)
          }
          resolve()
        }, 2000)
      })
    }

    await uploadProcess(0)
    setUploading(false)
    window.customConsoleLog('upload complete')
  }

  const cancelUpload = () => {
    setUploading(false)
  }

  return (
    <div>
      <ul>
        {items.map((item) => (<li key={item}>{item}</li>))}
      </ul>
      <button onClick={() => setItems([...items, getRandomNumber()])}>Add Item</button>
      <button onClick={() => setItems([...items.slice(0, items.length - 1)])}>Remove Item</button>
      <br />
      {uploading && <p>Uploading...</p>}
      <br />
      <button onClick={startUpload}>Start Upload</button>
      <button onClick={cancelUpload}>Cancel Upload</button>
    </div>
  );
}

export default IncorrectSequentialUploadComponent;
