import{_ as a,t as l,q as i,d as s,c as o,h as n,i as d}from"./chunks/framework.DSVuol0D.js";const b=JSON.parse('{"title":"Dialog","description":"","frontmatter":{},"headers":[],"relativePath":"pages/components/dialog.md","filePath":"pages/components/dialog.md"}'),c={name:"pages/components/dialog.md"};function p(g,t,r,m,u,D){const e=l("DialogDemo");return i(),s("div",null,[t[0]||(t[0]=o("h1",{id:"dialog",tabindex:"-1"},[n("Dialog "),o("a",{class:"header-anchor",href:"#dialog","aria-label":'Permalink to "Dialog"'},"​")],-1)),t[1]||(t[1]=o("p",null,[n("Applies visual styles to the native "),o("code",null,"<dialog>"),n(" element.")],-1)),t[2]||(t[2]=o("pre",null,[o("code",null,`<button class="c-button" onclick="openDialog()">
	Show Dialog
</button>

<dialog id="somedialog" class="c-dialog">
	<div class="c-box">
		<p>This is a dialog component.</p>
		<p>
			<button class="c-button" onclick="closeDialog()">
				Close
			</button>
		</p>
	</div>
</dialog>

<script>
	const dialog = document.getElementById("somedialog");

	function openDialog() {
		dialog.showModal();
	}

	function closeDialog() {
		dialog.close();
	}
<\/script>
`)],-1)),d(e)])}const h=a(c,[["render",p]]);export{b as __pageData,h as default};
