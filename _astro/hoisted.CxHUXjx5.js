import{c as n,l as s}from"./auth.DI5UUwQZ.js";const a=async()=>{const t=new URL(location.href),e=Object.fromEntries(Array.from(t.searchParams.entries()));try{const o=await(await fetch(n.github.logInAuthUrl,{method:"POST",mode:"cors",headers:{"content-type":"application/json"},body:JSON.stringify(e)})).json();if(o.error)return alert(JSON.stringify(o,null,2));await s(o.token)}catch(r){alert(r.message),console.error(r)}finally{location.replace("/")}};a();
