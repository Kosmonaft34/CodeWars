const sendBtn = document.getElementById('send-query')

function createElemHtml(html){
    const template = document.createElement('div')
    template.innerHTML = spinnerHtml
    return template.firstChild
}

const spinnerHtml = `<div class="spinner">
<img src="Spinner-1s-200px.svg" alt="">
</div>`



const spinner = createElemHtml(spinnerHtml)

sendBtn.onclick = () =>{
    document.body.append(spinner)
  const response = await fetch('http://localhost:3000/api/request', {
        method: 'POST'
    })
    if(response.ok){
        alert (await response.text())
        spinner.remove()    
    }
    setTimeout(() =>{
        spinner.remove() 
            },3000
    )
}