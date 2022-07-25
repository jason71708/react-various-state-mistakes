import React from 'react'
import { getRandomNumber } from '../utils'

function SequentialUploadComponent() {
  const [uploading, setUploading] = React.useState(false);
  const [items, setItems] = React.useState([getRandomNumber(), getRandomNumber()]);
  const processId = React.useRef('')

  const startUpload = async () => {
    if (processId.current && uploading) return
    console.log('items', items)
    const scopeProcessId = getRandomNumber()
    processId.current = scopeProcessId
    setUploading(true)

    try {
      const uploadProcess = async (index) => {
        return new Promise((resolve, reject) => {
          setTimeout(async () => {
            if (scopeProcessId === processId.current) {
              console.log(scopeProcessId, 'complete upload item', items[index])
              if (index < items.length - 1) {
                await uploadProcess(index + 1)
              }
              resolve()
            } else {
              reject('upload cancel')
            }
          }, 2000)
        })
      }
  
      await uploadProcess(0)
      console.log(scopeProcessId, 'upload complete')
    } catch (error) {
      console.log(error)
    } finally {
      if (scopeProcessId === processId.current) {
        processId.current = ''
        setUploading(false)
      }
    }
  }

  const cancelUpload = () => {
    processId.current = ''
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
      {processId.current && <p>Uploading...</p>}
      <br />
      <button onClick={startUpload}>Start Upload</button>
      <button onClick={cancelUpload}>Cancel Upload</button>
    </div>
  );
}

export default SequentialUploadComponent;
