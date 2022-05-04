


async function refreshlist(data){
    if (typeof window !== "undefined") {
        var table = document.getElementById("tablebody");

        table.innerHTML = "";
      
      for(var i = 0; i < data.title.length; i++){
        var row = `
        <tr class='holder css-0'>
        <td class='title css-zgoslk'>${data.title[i]}</td>
        <td class='thumb css-zgoslk'>${data.thumb[i]}</td>
        <td class='link css-zgoslk'>${data.link[i]}</td>
        </tr>
        `
      
        table.innerHTML += row;
      }
      }
}

export {refreshlist};