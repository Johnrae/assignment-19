

function proccessData(data) {
  return data.map(function(item) {
    return `
      <li>${item.title}</li>
    `
  }).join('');
}

function singleTemplate(data) {
  return `
    <h2>Something Todo</h2>
    <ul>${proccessData(data)}</ul>
  `;
}

export default singleTemplate;