<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <title>MojTermin | Kontrolna tabla</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.1.2/css/tempusdominus-bootstrap-4.min.css"/>
    <!-- Theme style -->
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">

    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/air-datepicker/2.2.3/css/datepicker.css'>

    <!-- Theme style -->
    <link rel="stylesheet" href="/css/admin.css">
    <link rel="stylesheet" href="{{ mix("/css/app.css") }}">

</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper" id="app">


    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <a class="nav-link">Administracija</a>
            </li>
        </ul>
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4" id="navDrawer">
        <!-- Brand Logo -->
        <a href="/" class="brand-link d-flex">
            <img src="/img/mojtermin_logo_dark.png" alt="mojtermin-logo" class="w-100">
        </a>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    @if((auth()->user()->photo) == "profile.png")
                        <img src="/img/profile/user.svg" class="img-circle elevation-2" alt="User Image">
                    @else
                        <img src="/img/profile/{{ auth()->user()->photo }}" class="img-circle elevation-2" alt="User Image">
                    @endif
                </div>
                <div class="info">
                    <a href="" class="d-block">{{ auth()->user()->name }}</a>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                    <li class="nav-item">
                        <router-link to="/profile" class="nav-link">
                            <i class="nav-icon fas fa-user-circle"></i>
                            <p>Profil i salon</p>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/dashboard" class="nav-link">
                            <i class="nav-icon fas fa-calendar-check"></i>
                            <p>Zakazivanja</p>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/services" class="nav-link">
                            <i class="nav-icon fas fa-money-bill-alt"></i>
                            <p>Usluge</p>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/location" class="nav-link">
                            <i class="nav-icon fas fa-map-marked-alt"></i>
                            <p>Mapa</p>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('logout') }}"
                           onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                            <i class="nav-icon fas fa-power-off" style="color:red;"></i>
                            <p>Odjavi se</p>
                        </a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </li>

                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Main content -->
        <div class="content">
            <div class="container-fluid pt-5">
                <!-- /.form group -->
                <router-view></router-view>
                <vue-progress-bar></vue-progress-bar>
                <!-- /router-view -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <footer class="main-footer">
        <strong>Copyright © 2020 - 2021 MojTermin by <a href="">AnisDlakic</a>. Sva prava zadržana.</strong>
    </footer>
</div>
<!-- ./wrapper -->

<script>
    var user = JSON.parse(atob("{{ base64_encode(auth()->user()) }}"));
    window.user = user;
    // window.user = $json(auth()->user());
</script>

<!-- REQUIRED SCRIPTS -->
<!-- jQuery -->
<script src="/js/app.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.1.2/js/tempusdominus-bootstrap-4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js"></script>
<script src="{{ asset("admin/plugins/bootstrap/js/bootstrap.js") }}"></script>
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>


<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/air-datepicker/2.2.3/js/datepicker.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/air-datepicker/2.2.3/js/i18n/datepicker.en.js'></script>


</body>
</html>
