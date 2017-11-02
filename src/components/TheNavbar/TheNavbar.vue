<template>
<nav class="navbar navbar-default navbar-static-top navbar-fixed-top navbar-inverse">
	<div class="container-fluid">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">
				SportsBook
			</a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav navbar-right">
				<li><a href="#" target="_blank"><i class="glyphicon glyphicon-ok"></i> Save</a></li>
        <li><a href="#" target="_blank"><i class="glyphicon glyphicon-circle-arrow-down"></i> Generate CSS</a></li>
        <li><a href="#" target="_blank"><i class="glyphicon glyphicon-remove"></i> Back to Admin</a></li>
      </ul>
			</div><!-- /.navbar-collapse -->
		</div><!-- /.container-fluid -->
	</nav>
 </template>

<script>
export default {
  name: 'the-navbar',
  data: () => ({
    menuItems: [
      { icon: 'check_circle', title: 'Save' },
      { icon: 'file_download', title: 'Download HTML' },
      { icon: 'arrow_back', title: 'Back To Admin' },
    ],
  }),
};
</script>

