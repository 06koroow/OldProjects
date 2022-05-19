const mapToHTML = data => { //pull out the html generating function
    return data
      .filter(el => { // consistent use of arrow functions vs traditional syntax
        return el.heading !== null || el.text !== null || el.photo!== null; // check that at least one field isn't null
      })
      .map(content => {  //now mapping the HTML using string interpolation/template literals
        return `
            ${ content.heading ? `<h1 class="bodyHeader content" id="${content.order}" href="${content.heading}">${content.heading}</h1>` : ''}
            ${ content.text ? `<p class="textArea content" id="${content.order}"> ${content.text}</p>`  : ''}
            ${ content.photo ? `<img class="photo content" src="${content.photo} id="${content.order}"" alt=""></img>` : ''}
            ${ content.videoLink > `<a href="${content.videoLink}" class="videoLink content">`} 
        `
      })
      .join(" "); //removing the comma join
  }
  
  
  // Fetch Data and Mapp HTML from the JSON Object it grabs from 'database.db'
  const fetchData = () => {
      console.log('Looking for data');
      fetch("./config/database.db")
          .then(response => {
              if (!response.ok) { throw Error ('ERROR') }
              
            return response.json()          
          })
          .then(data => {
              const content = mapToHTML(data);
              
              console.log({data, content});
  
              document //pointing the function to the DOM and giving it the container.
                  .querySelector('#contentContainer')
                  .innerHTML = content;
          }).catch(error => {
              console.log(error)
          })
  };
  

  fetchData();

    //fetch sidebar headings
    const mapToSideBar = data =>{
        return data      
        .filter(el => { // consistent use of arrow functions vs traditional syntax
          return el.heading !== null || el.text !== null || el.photo!== null; // check that at least one field isn't null
        })
        .map(content => {  //now mapping the HTML using string interpolation/template literals
          return `
              ${ content.heading ? `<a href="#${content.heading}" class="sidebarLink sideBar" >${content.heading}</a>` : ''}
          `
        })
        .join(" "); //removing the comma join
    }

    const fetchSidebar = () => {
        console.log('Looking for sidebar Headings');
        fetch("./config/database.db")
            .then(response => {
                if (!response.ok) { throw Error ('ERROR') }
                
              return response.json()          
            })
            .then(data => {
                const content = mapToSideBar(data);
                
                console.log({data, content});
    
                document //pointing the function to the DOM and giving it the container.
                    .querySelector('#sidebar')
                    .innerHTML = content;
            }).catch(error => {
                console.log(error)
            })
    };

    fetchSidebar();
    

    //fetch title
    const mapPageTitle = data =>{
        return data 


        .map(content => {  //now mapping the HTML using string interpolation/template literals
          return `
              ${ content.pageTitle ? `<h1 class="pageTitle" >${content.pageTitle}</h1>` : ''}
          `
        })
        .join(" "); //removing the comma join
    }

    const fetchTitle = () => {
        console.log('Looking for Title');
        fetch("./config/database.db")
            .then(response => {
                if (!response.ok) { throw Error ('ERROR') }
              return response.json()          
            })
            .then(data => {
                const content = mapPageTitle(data);
                console.log({data, content});
    
                document //pointing the function to the DOM and giving it the container.
                    .querySelector('#title')
                    .innerHTML = content;
            }).catch(error => {
                console.log(error)
            })
    };

    fetchTitle();
    