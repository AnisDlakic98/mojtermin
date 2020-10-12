@extends('layouts.website')

@section('content')
    <!-- Main Info -->
    <section class="section section-padding pb-0" id="salonContainer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4 d-flex">
                    <div class="salon-main-info m-auto d-flex">
                        <div class="m-auto">
                            <h1>{{ $salon->name }}</h1>
                            <cite>{{ $salon->address }}, {{ $salon->city->name }}</cite>
                            <div class="score-wrap my-2">
                                @foreach(range(1, $salon->stars) as $i)
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                @endforeach
                                @if($salon->stars < 5)
                                    @foreach(range(1, 5 - $salon->stars) as $i)
                                        <i class="fa fa-star dark" aria-hidden="true"></i>
                                    @endforeach
                                @endif
                            </div>
                            <div>
                                <button type="button" class="btn-booking w-100 mt-3">Book now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="salon-gallery">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="https://cdn-uploads.fresha.com/location-profile-images/205104/199294/medium_03fbb6dd-0c01-47f1-a988-faa39602ea10.jpg" alt="First slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="https://cdn-uploads.fresha.com/location-profile-images/205104/199294/medium_03fbb6dd-0c01-47f1-a988-faa39602ea10.jpg" alt="Second slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="https://cdn-uploads.fresha.com/location-profile-images/205104/199294/medium_03fbb6dd-0c01-47f1-a988-faa39602ea10.jpg" alt="Third slide">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End of Main Info -->

    <section class="section section-padding smaller" id="salonAbout">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <h1>Description</h1>
                    <ul class="salon-features mt-3 mb-4">
                        <li>
                            <i class="fas fa-bolt"></i>
                            Instant confirmation
                        </li>
                        <li>
                            <i class="fas fa-venus-mars"></i>
                            Unisex
                        </li>
                        <li>
                            <i class="fas fa-coins"></i>
                            Pay by app
                        </li>
                    </ul>
                    <p>Welcome to Balance Massage & Wellness, a place where therapeutic massage and relaxation meet.
                        Balance Massage & Wellness is a contemporary salon located close to Oxford Street in Central
                        London. Our customized range of treatments and bespoke approach will leave you ready for any
                        challenge as well as feeling pampered and looked after! Every minute with us is about you and
                        your needs. We are pleased to offer outstanding treatments both in our salon and in your office.
                        If you struggle to go through the day at the desk without fatigue, we have a perfect solution –
                        our qualified and experienced therapists in Central London can come to your office and make you
                        relaxed and ready to conquer the day. Whether you are looking for sports massage, deep tissue
                        massage, Swedish massage, slimming treatment or wish to come for a couples massage you found the
                        best place. Get the best massage you’ve ever had from Professionally Trained Physiotherapists
                        with international background and experience. Make a difference to your day by booking an
                        appointment.</p>
                </div>
                <div class="col-md-4">
                    <div class="salon-location">
                        <h1>Location</h1>
                        <a href="#salonMap" class="smooth-link">
                            <div class="d-flex justify-content-between">
                                <p class="my-auto">{{ $salon->address }}</p>
                                <img src="/img/map.png" alt="map-icon">
                            </div>
                        </a>
                        <hr>
                        <div class="salon-worktime">
                            <p><i class="far fa-clock"></i> Open now 9:00am - 9:00pm.</p>
                        </div>
                        <ul class="opening-hours">
                            <li class="d-flex justify-content-between">
                                <p>Monday</p>
                                <p>9:00am - 9:00pm</p>
                            </li>
                            <li class="d-flex justify-content-between">
                                <p>Tuesday</p>
                                <p>9:00am - 9:00pm</p>
                            </li>
                            <li class="d-flex justify-content-between">
                                <p>Wednesday</p>
                                <p>9:00am - 9:00pm</p>
                            </li>
                            <li class="d-flex justify-content-between">
                                <p>Thursday</p>
                                <p>9:00am - 9:00pm</p>
                            </li>
                            <li class="d-flex justify-content-between">
                                <p>Friday</p>
                                <p>9:00am - 9:00pm</p>
                            </li>
                            <li class="d-flex justify-content-between">
                                <p><b>Saturday</b></p>
                                <p><b>9:00am - 9:00pm</b></p>
                            </li>
                            <li class="d-flex justify-content-between">
                                <p>Sunday</p>
                                <p>9:00am - 9:00pm</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-padding smaller pt-0 google-map-section" id="salonMap">
        <div class="container">
            <div class="row">
                <google-map></google-map>
            </div>
        </div>
    </section>

    <section class="section section-padding smaller pt-0">
        <div class="container">
            <div class="row">
                <ul class="salon-services w-100">
                    @foreach($salon->services as $service)
                        <li class="d-flex justify-content-between">
                            <div class="my-auto">
                                <h4>{{ $service->name }}</h4>
                                <p class="mb-0">{{ $service->duration }}</p>
                            </div>
                            <div>
                                <p>From</p>
                                <h4>{{ $service->price }}€</h4>
                            </div>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </section>



    MAPA

   @include('components.comments')

    @include('components.similar')


@endsection


@section('scripts')
    <script>
        if (window.location.href.split("/")[3] === "salon-details") {
            $('.main-header-area .logo img').attr("src", "/img/mojtermin_logo_dark.png");
            $('body').append("<style>.header-area .main-header-area.sticky { background: #fff;}</style>");
            $('body').append("<style>.header-area { border-bottom: solid 1px #f4f1f1; }</style>");
            $('body').append("<style>#navigation a { color: #333 }</style>");
        }

    </script>
@stop