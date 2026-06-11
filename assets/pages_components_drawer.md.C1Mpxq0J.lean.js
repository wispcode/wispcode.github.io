import{_ as a,t as i,q as o,d,c as t,h as n,i as s}from"./chunks/framework.DSVuol0D.js";const w=JSON.parse('{"title":"Drawer","description":"","frontmatter":{},"headers":[],"relativePath":"pages/components/drawer.md","filePath":"pages/components/drawer.md"}'),l={name:"pages/components/drawer.md"};function p(m,e,g,c,u,b){const r=i("DrawerDemo");return o(),d("div",null,[e[0]||(e[0]=t("h1",{id:"drawer",tabindex:"-1"},[n("Drawer "),t("a",{class:"header-anchor",href:"#drawer","aria-label":'Permalink to "Drawer"'},"​")],-1)),e[1]||(e[1]=t("p",null,"Slides a drawer in from the side of the page.",-1)),e[2]||(e[2]=t("pre",null,[t("code",null,`<button class="c-button" onclick="toggleClass('sidebar', 'is-open')">
	Toggle Drawer
</button>

<div id="sidebar" class="c-drawer">
	<div class="c-box">
		<p>This is a drawer component.</p>
	</div>
</div>

<script>
	function toggleClass(id, className) {
		document.getElementById(id).classList.toggle(className);
	}
<\/script>
`)],-1)),s(r),e[3]||(e[3]=t("h2",{id:"modifiers",tabindex:"-1"},[n("Modifiers "),t("a",{class:"header-anchor",href:"#modifiers","aria-label":'Permalink to "Modifiers"'},"​")],-1)),e[4]||(e[4]=t("h3",{id:"right",tabindex:"-1"},[n("Right "),t("a",{class:"header-anchor",href:"#right","aria-label":'Permalink to "Right"'},"​")],-1)),e[5]||(e[5]=t("p",null,"Slides the drawer in from on the right-hand side instead.",-1)),e[6]||(e[6]=t("pre",null,[t("code",null,`<button class="c-button" onclick="toggleClass('sidebar', 'is-open')">
	Toggle Drawer
</button>

<div id="sidebar" class="c-drawer c-drawer--right">
	<div class="c-box">
		<p>This is a drawer component.</p>
	</div>
</div>

<script>
	function toggleClass(id, className) {
		document.getElementById(id).classList.toggle(className);
	}
<\/script>
`)],-1)),s(r,{right:""}),e[7]||(e[7]=t("h2",{id:"states",tabindex:"-1"},[n("States "),t("a",{class:"header-anchor",href:"#states","aria-label":'Permalink to "States"'},"​")],-1)),e[8]||(e[8]=t("h3",{id:"is-open",tabindex:"-1"},[n("is-open "),t("a",{class:"header-anchor",href:"#is-open","aria-label":'Permalink to "is-open"'},"​")],-1)),e[9]||(e[9]=t("p",null,"Determines is the drawer is opened or closed.",-1)),e[10]||(e[10]=t("pre",null,[t("code",null,`<div id="sidebar" class="c-drawer is-open"></div>
`)],-1))])}const h=a(l,[["render",p]]);export{w as __pageData,h as default};
