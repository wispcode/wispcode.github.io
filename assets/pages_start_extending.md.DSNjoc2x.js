import{_ as t,q as s,d as i,g as a}from"./chunks/framework.DSVuol0D.js";const u=JSON.parse('{"title":"Extending","description":"","frontmatter":{},"headers":[],"relativePath":"pages/start/extending.md","filePath":"pages/start/extending.md"}'),n={name:"pages/start/extending.md"};function o(l,e,r,d,c,p){return s(),i("div",null,[...e[0]||(e[0]=[a(`<h1 id="extending" tabindex="-1">Extending <a class="header-anchor" href="#extending" aria-label="Permalink to &quot;Extending&quot;">​</a></h1><p>Wisp is designed to be extended using <code>@layer</code>. To extend Wisp, write to one of the layers it uses and it will slot into the cascade naturally.</p><pre><code>&lt;div class=&quot;c-box u-color-success&quot;&gt;
	Alert Message
&lt;/div&gt;

&lt;style&gt;
	@layer utilities {
		.u-color-success {
			background-color: #008800;
			color: #ffffff;
		}
	}
&lt;/style&gt;
</code></pre><div class="u-vite-preview"><div class="c-box" style="background-color:#008800;color:#fff;"> Success message </div></div><h2 id="layers" tabindex="-1">Layers <a class="header-anchor" href="#layers" aria-label="Permalink to &quot;Layers&quot;">​</a></h2><p>Wisp defines 5 layers in order of lowest to highest specificity.</p><ol><li>Foundation</li><li>Objects</li><li>Behaviors</li><li>Components</li><li>Utilities</li></ol>`,7)])])}const f=t(n,[["render",o]]);export{u as __pageData,f as default};
