<!-- header-start -->
<header>
    <div class="header-area">
        <div id="sticky-header" class="main-header-area">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="logo">
                        <a href="/">
                            <img src="/img/mojtermin_logo_light.png" alt="mojtermin-logo">
                        </a>
                    </div>
                    <div class="main-menu d-none d-lg-block">
                        <nav>
                            <ul id="navigation">
                                <li><a class="active" href="/">Početna</a></li>
                                <li><a href="contact.html">Zakaži termin</a></li>
                                <li><a href="contact.html">Usluge</a></li>
                                <li><a href="contact.html">FAQs</a></li>
                                <li><a href="contact.html">Kontakt</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="">
                        <div class="Appointment">
                            @if(Auth::guest())
                                <div class="book_btn d-none d-lg-block">
                                    <a href="/login">Prijavi se</a>
                                </div>
                                <div class="book_btn d-none d-lg-block ml-2">
                                    <a href="/register-customer">Registruj se</a>
                                </div>
                            @else
                                <div class="book_btn d-none d-lg-block">
                                    @if(Auth::user()->hasRole('administrator'))
                                        <a href="/admin">Moj Profil</a>
                                    @else
                                        <a href="/user">Moj Profil</a>
                                    @endif
                                </div>
                            @endif
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</header>
<!-- header-end -->