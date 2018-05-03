$(function() {
	$('#btnSubmit').click(function(e){
		e.preventDefault();
		$.ajax({
			url: '/receive',
			type: 'get',
			dataType: 'json',
			data: {
				username: $('#username').val()
			},
			success: function(data) {
				console.info(data);
			},
			error: function() {
				alert('error');
			}
		})
	})
})