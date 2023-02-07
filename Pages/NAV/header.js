class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="dropdown">
            <button class="dropbtn">
            <img src="Resources/Images/menu.png" alt="Drop down menu">
            </button>
            <div class="dropdown-content">
            <ul class="noBull">
                <li><a href="Pages/About.html">about</a></li>
                <p class="NavTitle">Work:</p>
                <li><a href="Pages/work section 6/Work.html">2005 - 2022</a></li>
                <li><a href="Pages/work section 5/Work.html">1997 - 2004</a></li>
                <li><a href="Pages/work section 4/Work.html">1990 - 1996</a></li>
                <li><a href="Pages/work section 3/Work.html">1980 - 1989</a></li>
                <li><a href="Pages/work section 2/Work.html">1976 - 1980</a></li>
                <li><a href="Pages/work section 1/Work.html">1969 - 1975</a></li>
                <p class="NavTitle">Archive:</p>
                <li><a href="Pages/Exhibitions.html">exhibitions</a></li>
                <li><a href="Pages/Collections.html">collections</a></li>
                <li><a href="Pages/text_catalogues.html">text/catalogues</a></li>
                <p class="NavTitle"></p>
                <li><a href="Pages/Contact.html">contact</a></li>
            </ul>
        
            
            </div>
            </div>
            
    `;
    }

}


customElements.define('header-component', Header);