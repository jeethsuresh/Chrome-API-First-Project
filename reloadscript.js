//When Button is clicked,
//clear cache and reload page

var runthis = {

	clearcache: function(){
		var millisecondsPerWeek = 1000*60*60*24*7;
		var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;
		chrome.browsingData.remove({
			"since": oneWeekAgo},
			{
			"appcache":true,
			"cache": true,
			"pluginData": true
			});
		chrome.tabs.reload();
	}
}
		

document.addEventListener('DOMContentLoaded', function(){
	runthis.clearcache();
});


