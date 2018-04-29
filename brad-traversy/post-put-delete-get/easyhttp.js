// function easyHTTP() {
//   this.http = new XMLHttpRequest();
// }

// // Make an HTTP GET Request
// easyHTTP.prototype.get = function(url, callback) {
//   this.http.open('GET', url, true);

//   let self = this;
//   this.http.onload = function() {
//     if(self.http.status === 200) {
//       callback(null, self.http.responseText);
//     } else {
//       callback('Error: ' + self.http.status);
//     }
//   }

//   this.http.send();
// }

// // Make an HTTP POST Request
// easyHTTP.prototype.post = function(url, data, callback) {
//   this.http.open('POST', url, true);
//   this.http.setRequestHeader('Content-type', 'application/json');

//   let self = this;
//   this.http.onload = function() {
//     callback(null, self.http.responseText);
//   }

//   this.http.send(JSON.stringify(data));
// }

// // Make an HTTP PUT Request
// easyHTTP.prototype.put = function(url, data, callback) {
//   this.http.open('PUT', url, true);
//   this.http.setRequestHeader('Content-type', 'application/json');

//   let self = this;
//   this.http.onload = function() {
//     callback(null, self.http.responseText);
//   }

//   this.http.send(JSON.stringify(data));
// }

// // Make an HTTP DELETE Request
// easyHTTP.prototype.delete = function(url, callback) {
//   this.http.open('DELETE', url, true);

//   let self = this;
//   this.http.onload = function() {
//     if(self.http.status === 200) {
//       callback(null, 'Post Deleted');
//     } else {
//       callback('Error: ' + self.http.status);
//     }
//   }

//   this.http.send();
// }

class EasyHTTP {
  // Make an HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make an HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make an HTTP PUT Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make an HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(() => resolve("Resource Deleted..."))
        .catch(err => reject(err));
    });
  }
}
