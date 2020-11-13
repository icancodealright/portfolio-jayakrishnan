const template = document.createElement("template");
template.innerHTML = `
<style>

div[class^="project__name__"]{
    border:2px solid black;
    width:500px;
    height:300px; 
  }
  
  div[class^="btn__"]{
      width:10px;
    height:10px;
    border-radius:50%;
  }
  .btn{
    width:20%;
    display:flex;
    justify-content:space-evenly;
    align-Items:center;
  }
  .btn__yellow{
    background-color:yellow;
  }
  
  
  
  .btn__red{
    background-color:red;
  }
  
  .btn__green{
    background-color:green;
  }
  
  
  .header__project__detail{
    background-color:gray;
    display:flex;
    justify-content:space-between;
    height:30px;
    align-Items:center;
  }
  
  .image__project{
    width:500px;
    height:270px;
  position:relative;
}
img{
  width:inherit;
  height:270px;
}

.visit{
  visibility:hidden;
   position: absolute;
    width: 100px;
    height: 50px;
    left: 40%;
    top: 50%;
  border:2px solid black;
  display:flex;
  justify-content:center;
  align-items:center;
  color:black;
  background-color:white;
}

.visit:hover{
  color:white;
  background-color:gray;
   box-shadow: 5px 5px black;
}

.image__project:hover .visit{
  visibility:visible;
}



</style>
<div class="project__name__">
            <div class="header__project__detail">
            <div class="btn">
              <div class="btn__yellow">
              </div>
              <div class="btn__red">
              </div>
              <div class="btn__green">
              </div>
              </div>
              <div id="name__of__project">
               
              </div>
             </div>
             <div class="image__project" alt="project-image">
              <img src="">
              <a href="">
              <div class="visit" >
               visit
               </div>
               </a>
             </div>
           </div> 
`;

class ContentProject extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.getElementById(
      "name__of__project"
    ).innerHTML = this.getAttribute("name");
    this.shadowRoot.querySelector("a").href = this.getAttribute("src");
    this.shadowRoot.querySelector("img").src = this.getAttribute("url");
  }
}

window.customElements.define("content-project", ContentProject);
