app = (config) ->
	# Display name
	displayName config.user
	
	# Display links
	displayLink {
		description: "GitHub"
		icon: "icon-github"
		url: "https://github.com/#{config.user}"
	}
	for link in config.links
		displayLink link
	
	gh "/users/#{config.user}", (user) ->
		displayUser user
		
	gh "/users/#{config.user}/repos?sort=updated", (repos) ->
		$("#repos .loading").remove()
		displayRepo repo for repo in repos
		
	gh "/users/#{config.user}/gists", (gists) ->
		$("#gists .loading").remove()
		displayGists gists
		
	gh "/users/#{config.user}/starred", (repos) ->
		$("#starred .loading").remove()
		displayRepoList repos, "#starred"
		
	gh "/users/#{config.user}/subscriptions", (repos) ->
		$("#watched .loading").remove()
		displayRepoList repos, "#watched"
		
displayName = (name) ->
	$("#name").html name
	$("title").html "#{name} &middot; Profile"
	
displayLink = (link) ->
	$("ul#links").append Handlebars.templates.link link
	
displayUser = (user) ->
	$("#title").html Handlebars.templates.title user
	
displayRepo = (repo) ->
	$("#repos").append Handlebars.templates.repo repo
	
displayRepoList = (repos, where) ->
	$(where).append Handlebars.templates.repolist repos
	
displayGists = (gists) ->
	$("#gists").append Handlebars.templates.gists gists
	
displayError = (error) ->
	$("#content").prepend Handlebars.templates.error error
	
gh = (ressource, cb) ->
	ressource += if ressource.indexOf("?") is -1 then "?callback=?" else "&callback=?" 
	$.getJSON "https://api.github.com#{ressource}", (resp) ->
		if resp.meta.status is 200
			cb(resp.data)
		else
			if !config.error
				displayError "Could not load data from GitHub API. Try again later."
				config.error = true
		
Handlebars.registerHelper 'language', (name) ->
	extension = name.match(/[a-z0-9]+$/i)[0]
	new Handlebars.SafeString getLanguage extension
	
getLanguage = (extension) ->
	return config.languages[extension] or "Text"
	
$ () ->
	app(window.config)
