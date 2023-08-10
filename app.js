$(document).ready(function() {
    $(".tab-link").click(function() {
        const tabId = $(this).attr("data-tab");
        showTab(tabId);
    });

    function showTab(tabId) {
        $(".tab-content .content").hide();
        $(`.${tabId}-content`).show();
    }
});$('tab-title').each(function(i){
    
})

$('.tab-link').click(function() {
    var tabId = $(this).data('tab');
    $('.content').hide();
    $('.' + tabId + '-content').show();
});