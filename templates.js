(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};Handlebars.partials=Handlebars.templates,b.repolist=a(function(a,b,c,d,e){function k(a,b){var d="",e;return d+='\n\t<li>\n\t\t<a href="',(e=c.html_url)?e=e.call(a,{hash:{},data:b}):(e=a.html_url,e=typeof e===h?e.apply(a):e),d+=i(e)+'">',(e=c.full_name)?e=e.call(a,{hash:{},data:b}):(e=a.full_name,e=typeof e===h?e.apply(a):e),d+=i(e)+'</a><br>\n\t\t<small class="muted">',(e=c.description)?e=e.call(a,{hash:{},data:b}):(e=a.description,e=typeof e===h?e.apply(a):e),d+=i(e)+"</small>\n\t</li>\n",d}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f="",g,h="function",i=this.escapeExpression,j=this;f+='<div class="span12">\n<ul>\n',g=c.each.call(b,b,{hash:{},inverse:j.noop,fn:j.program(1,k,e),data:e});if(g||g===0)f+=g;return f+="\n</ul>\n</div>\n<hr>",f}),b.repo=a(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f="",g,h="function",i=this.escapeExpression;return f+='<div class="span3 repo">\n\t<h4><a href="',(g=c.html_url)?g=g.call(b,{hash:{},data:e}):(g=b.html_url,g=typeof g===h?g.apply(b):g),f+=i(g)+'">',(g=c.name)?g=g.call(b,{hash:{},data:e}):(g=b.name,g=typeof g===h?g.apply(b):g),f+=i(g)+'</a></h4>\n\t<p>\n\t\t<i class="icon-eye-open" title="Watchers"></i> ',(g=c.watchers)?g=g.call(b,{hash:{},data:e}):(g=b.watchers,g=typeof g===h?g.apply(b):g),f+=i(g)+' &middot; \n\t\t<i class="icon-share-alt" title="Forks"></i> ',(g=c.forks)?g=g.call(b,{hash:{},data:e}):(g=b.forks,g=typeof g===h?g.apply(b):g),f+=i(g)+'\n\t</p>\n\t<p class="muted repo-text"><small>',(g=c.description)?g=g.call(b,{hash:{},data:e}):(g=b.description,g=typeof g===h?g.apply(b):g),f+=i(g)+"</small></p>\n\t<hr>\n</div>\n",f}),b.title=a(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f="",g,h="function",i=this.escapeExpression;return f+='<img class="img-polaroid" src="http://www.gravatar.com/avatar/',(g=c.gravatar_id)?g=g.call(b,{hash:{},data:e}):(g=b.gravatar_id,g=typeof g===h?g.apply(b):g),f+=i(g)+'.png?s=200&d=mm">\n<h1 id="name">\n\t',(g=c.login)?g=g.call(b,{hash:{},data:e}):(g=b.login,g=typeof g===h?g.apply(b):g),f+=i(g)+'<br>\n\t<small class="muted">',(g=c.name)?g=g.call(b,{hash:{},data:e}):(g=b.name,g=typeof g===h?g.apply(b):g),f+=i(g)+"</small>\n</h1>",f}),b.error=a(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f="",g="function",h=this.escapeExpression;return f+='<div class="alert alert-error">\n'+h(typeof b===g?b.apply(b):b)+"\n</div>",f}),b.link=a(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f="",g,h="function",i=this.escapeExpression;return f+='<li><a href="',(g=c.url)?g=g.call(b,{hash:{},data:e}):(g=b.url,g=typeof g===h?g.apply(b):g),f+=i(g)+'"><i class="',(g=c.icon)?g=g.call(b,{hash:{},data:e}):(g=b.icon,g=typeof g===h?g.apply(b):g),f+=i(g)+' icon-2x"></i> ',(g=c.description)?g=g.call(b,{hash:{},data:e}):(g=b.description,g=typeof g===h?g.apply(b):g),f+=i(g)+"</a></li>",f}),b.gists=a(function(a,b,c,d,e){function l(a,b){var d="",e;d+="\n\t",e=c["if"].call(a,a.description,{hash:{},inverse:k.noop,fn:k.program(2,m,b),data:b});if(e||e===0)d+=e;return d+="\n",d}function m(a,b){var d="",e;d+='\n\t\t<li>\n\t\t\t<a href="',(e=c.html_url)?e=e.call(a,{hash:{},data:b}):(e=a.html_url,e=typeof e===j?e.apply(a):e),d+=i(e)+'">',(e=c.description)?e=e.call(a,{hash:{},data:b}):(e=a.description,e=typeof e===j?e.apply(a):e),d+=i(e)+"</a>\n\t\t\t(",e=c.each.call(a,a.files,{hash:{},inverse:k.noop,fn:k.program(3,n,b),data:b});if(e||e===0)d+=e;return d+=")\n\t\t</li>\t\n\t",d}function n(a,b){var d,e;return e={hash:{},data:b},i((d=c.language,d?d.call(a,a.filename,e):h.call(a,"language",a.filename,e)))}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f="",g,h=c.helperMissing,i=this.escapeExpression,j="function",k=this;f+='<div class="span12">\n<ul>\n',g=c.each.call(b,b,{hash:{},inverse:k.noop,fn:k.program(1,l,e),data:e});if(g||g===0)f+=g;return f+="\n</ul>\n</div>\n<hr>",f})})()