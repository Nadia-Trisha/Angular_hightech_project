<?php
if(isset($_GET['id']) && $_GET['id'] > 0){
    $qry = $conn->query("SELECT * from `service_list` where id = '{$_GET['id']}' and `status` = 1 ");
    if($qry->num_rows > 0){
        foreach($qry->fetch_assoc() as $k => $v){
            $$k=$v;
        }
    }else{
		echo '<script>alert("service ID is not valid."); location.replace("./?page=services")</script>';
	}
}else{
	echo '<script>alert("service ID is Required."); location.replace("./?page=services")</script>';
}
?>
<style>
	#banner-img{
		width:40vw;
		height:23rem;
        margin: 0 auto;
        margin-bottom:1.5em;
		overflow:hidden;
        background-color:#000;
	}
	#banner-img > img{
		width:100%;
		height:100%;
        object-fit: contain;
		object-position:center center;
	}
</style>
<div class="row mt-lg-n4 mt-md-n4 justify-content-center">
	<div class="col-lg-10 col-md-12 col-sm-12 col-xs-12">
		<div class="card rounded-0">
			<div class="card-body">
                <div class="container-fluid mt-4">
					<div id="banner-img">
						<img src="<?= validate_image($image_path ?? "") ?>" alt="">
					</div>
					<h2><b><?= $name ?? "" ?></b></h2>
					<div><?= isset($description) ? (htmlspecialchars_decode($description)) : "" ?></div>
                </div>
            </div>
		</div>
	</div>
</div>