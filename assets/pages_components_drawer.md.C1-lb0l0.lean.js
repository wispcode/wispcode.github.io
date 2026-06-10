import{_ as n,t as o,q as i,d,c as t,h as a,i as s,g as l}from"./chunks/framework.DSVuol0D.js";const f=JSON.parse('{"title":"Drawer","description":"","frontmatter":{},"headers":[],"relativePath":"pages/components/drawer.md","filePath":"pages/components/drawer.md"}'),p={name:"pages/components/drawer.md"};function c(m,e,h,u,g,b){const r=o("DrawerDemo");return i(),d("div",null,[e[0]||(e[0]=t("h1",{id:"drawer",tabindex:"-1"},[a("Drawer "),t("a",{class:"header-anchor",href:"#drawer","aria-label":'Permalink to "Drawer"'},"​")],-1)),e[1]||(e[1]=t("p",null,"Slides a drawer in from the side of the page.",-1)),e[2]||(e[2]=t("pre",null,[t("code",null,`<button class="c-button" onclick="toggleClass('sidebar', 'is-open')">
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
`)],-1)),s(r),e[3]||(e[3]=t("h2",{id:"modifiers",tabindex:"-1"},[a("Modifiers "),t("a",{class:"header-anchor",href:"#modifiers","aria-label":'Permalink to "Modifiers"'},"​")],-1)),e[4]||(e[4]=t("h3",{id:"right",tabindex:"-1"},[a("Right "),t("a",{class:"header-anchor",href:"#right","aria-label":'Permalink to "Right"'},"​")],-1)),e[5]||(e[5]=t("p",null,"Slides the drawer in from on the right-hand side instead.",-1)),e[6]||(e[6]=t("pre",null,[t("code",null,`<button class="c-button" onclick="toggleClass('sidebar', 'is-open')">
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
`)],-1)),s(r,{right:""}),e[7]||(e[7]=l("",6))])}const v=n(p,[["render",c]]);export{f as __pageData,v as default};
