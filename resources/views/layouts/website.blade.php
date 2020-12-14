<!doctype html>
<html class="no-js" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>MojTermin | Aplikacija za salone i spa centre</title>

    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="/img/favicon.png" type="image/gif">

    <link rel="stylesheet" href="/theme/css/bootstrap.min.css">
    <link rel="stylesheet" href="/theme/css/owl.carousel.min.css">
    <link rel="stylesheet" href="/theme/css/magnific-popup.css">
    <link rel="stylesheet" href="/theme/css/themify-icons.css">
    <link rel="stylesheet" href="/theme/css/flaticon.css">
    <link rel="stylesheet" href="/theme/css/gijgo.css">
    <link rel="stylesheet" href="/theme/css/animate.min.css">
    <link rel="stylesheet" href="/theme/css/slick.css">
    <link rel="stylesheet" href="/theme/css/slicknav.css">
    <link rel="stylesheet" href="/theme/css/style.css">

    <link rel="stylesheet" href="/css/app.css">

</head>

<body>

<!--[if lte IE 9]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade
    your browser</a> to improve your experience and security.</p>
<![endif]-->

<div id="app2">

    <div id="preloader">
        <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

    @include('components.navbar')

    <main>

        @yield('content')

    </main>

    @include('components.footer')

</div>

@if(!Auth::guest())
<script>
    var user = JSON.parse(atob("{{ base64_encode(auth()->user()) }}"));
    window.user = user;
</script>
@endif

<!--/ service_area_2  -->
<!-- JS here -->
<script src="/theme/js/vendor/modernizr-3.5.0.min.js"></script>
<script src="/theme/js/vendor/jquery-1.12.4.min.js"></script>
<script src="/theme/js/popper.min.js"></script>
<script src="/theme/js/bootstrap.min.js"></script>
<script src="/theme/js/owl.carousel.min.js"></script>
<script src="/theme/js/isotope.pkgd.min.js"></script>
<script src="/theme/js/ajax-form.js"></script>
<script src="/theme/js/waypoints.min.js"></script>
<script src="/theme/js/jquery.counterup.min.js"></script>
<script src="/theme/js/imagesloaded.pkgd.min.js"></script>
<script src="/theme/js/scrollIt.js"></script>
<script src="/theme/js/jquery.scrollUp.min.js"></script>
<script src="/theme/js/wow.min.js"></script>
<script src="/theme/js/jquery.slicknav.min.js"></script>
<script src="/theme/js/jquery.magnific-popup.min.js"></script>
<script src="/theme/js/plugins.js"></script>
<script src="/theme/js/gijgo.min.js"></script>
<script src="/theme/js/main.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js"></script>
<script src="/js/app2.js"></script>

@yield('scripts')

</body>

</html>