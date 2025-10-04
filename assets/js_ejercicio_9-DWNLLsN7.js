import"./style-DQLMo0dU.js";var e=document.getElementById(`taskInput`),t=document.getElementById(`addTask`),n=document.getElementById(`taskList`),r=document.getElementById(`clearCompleted`),i=JSON.parse(localStorage.getItem(`tasks`))||[];function a(){n.innerHTML=``,i.forEach((e,t)=>{n.innerHTML+=`
        <li>
          <input type="checkbox" ${e.completed?`checked`:``} 
                 onchange="toggleTask(${t})">
          <span style="text-decoration:${e.completed?`line-through`:`none`}">
            ${e.text}
          </span>
        </li>`}),localStorage.setItem(`tasks`,JSON.stringify(i))}function o(){e.value.trim()!==``&&(i.push({text:e.value,completed:!1}),e.value=``,a())}function s(){i=i.filter(e=>!e.completed),a()}t.onclick=o,r.onclick=s,e.addEventListener(`keypress`,e=>{e.key===`Enter`&&o()}),a();