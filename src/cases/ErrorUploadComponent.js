import React from 'react'

function App2() {
  const [uploading, setUploading] = React.useState(false);
  const [items, setItems] = React.useState([1, 2, 99, 100]);

  const getRandomNumber = (max = 1000) => {
    return Math.floor(Math.random() * max)
  }

  const startUpload = async () => {
    const randomId = getRandomNumber()
    setUploading(true)

    const uploadProcess = async (index) => {
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          console.log(randomId, 'complete upload item', items[index])
          console.log('index', index)
          console.log('items', items)
          if (index >= items.length - 1) {
            resolve()
          } else {
            await uploadProcess(index + 1)
          }
        }, 2000)
      })
    }

    await uploadProcess(0)
    setUploading(false)
    console.log(randomId, 'upload complete')
  }

  const cancelUpload = () => {
    setUploading(false)
  }

  return (
    <div className="App2">
      <h1>App2</h1>
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

export default App2;
