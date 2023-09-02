var arr=[
    {dp:"https://images.unsplash.com/photo-1625052804681-366ec6526fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kbGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"},
    {dp:"https://images.unsplash.com/photo-1604514628550-37477afdf4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80",story:"https://images.unsplash.com/photo-1604514775346-3f40ef356d68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"},
    {dp:"https://images.unsplash.com/photo-1638773867253-7fc8d950943b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80",story:"https://plus.unsplash.com/premium_photo-1664869376894-9e047086bb46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"},
    {dp:"https://images.unsplash.com/photo-1640351663149-ee5f1d4608e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",story:"https://images.unsplash.com/photo-1611804169105-1cd73d682be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"},
    {dp:"https://images.unsplash.com/photo-1640351663254-1aaef2380116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",story:"https://images.unsplash.com/photo-1615222443417-6d76586644a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80"},
]
var clutter=""
var stories=document.querySelector(".story-cont")

arr.forEach((elem,id)=> {
   clutter +=` <div class="story">
                <img id="${id}"src="${elem.dp}" alt="">
            </div>
        </div>`
})
stories.innerHTML=clutter
stories.addEventListener("click",(dets)=>{
    document.querySelector(".full-str").style.backgroundImage=`url(${arr[dets.target.id].story})`
    document.querySelector(".full-str").style.display="block"
    console.log(dets.target.id)
    setTimeout(()=>{
        document.querySelector(".full-str").style.display="none"
    },3000)
})
