

function proccessData(data) {
  return data.map(function(item) {
    return `
      ,<li class="clickable" data-user-id="${item.objectId}">${item.name}</li>

    `
  }).join('');
}

function singleTemplate(data) {
  return `
    <h2>Contact</h2>
    <ul>${proccessData(data)}</ul>
  `;
}

export default singleTemplate;