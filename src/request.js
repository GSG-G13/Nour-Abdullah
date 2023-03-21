export const getData = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const dataObj = JSON.parse(xhr.responseText);
      const results = dataObj.results;
      cb(results);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};