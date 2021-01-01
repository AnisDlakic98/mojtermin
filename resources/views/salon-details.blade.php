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
                                @if(Auth::guest())
                                    <button type="button" class="btn-booking w-100 mt-3 disabled" disabled>Morate se prijaviti da biste zakazivali</button>
                                @else
                                    @if($salon->services && count($salon->services) > 0)
                                        <button type="button" class="btn-booking w-100 mt-3" data-toggle="modal" data-target="#myModalFullscreen">Zakaži termin</button>
                                    @else
                                        <button type="button" class="btn-booking w-100 mt-3 disabled" disabled>Trenutno ne možete zakazati</button>
                                    @endif
                                @endif

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="salon-gallery">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            @if($salon->images && count($salon->images) > 1)
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            @endif
                            <div class="carousel-inner">
                                @if($salon->images && count($salon->images) > 0)
                                    @foreach($salon->images as $image)
                                        <div class="carousel-item @if($loop->index == 0) active @endif">
                                            <img class="d-block w-100" src="/img/profile/salon/{{ $image->image_path }}" alt="First slide">
                                        </div>
                                    @endforeach
                                @endif
                            </div>
                            @if($salon->images && count($salon->images) > 1)
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                            @endif
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
                    <h1>Opis</h1>
                    {!! $salon->description !!}
                </div>
                <div class="col-md-4">
                    <div class="salon-location">
                        <h1>Adresa</h1>
                        <a href="#salonMap" class="smooth-link">
                            <div class="d-flex justify-content-between">
                                <p class="my-auto">{{ $salon->address }}</p>
                                <img src="/img/map.png" alt="map-icon">
                            </div>
                        </a>
                        <hr>
                        <div class="salon-worktime mb-3">
                            @if(\Carbon\Carbon::today()->format('l') == 'Saturday')
                                @if(empty($salon->saturdayOpen))
                                    <p>Zatvoreno</p>
                                @else
                                    <p><i class="far fa-clock"></i> Otvoreno {{ date('h:i A', strtotime($salon->saturdayOpen)) }} -  {{ date('h:i A', strtotime($salon->saturdayClose)) }}.</p>
                                @endif
                            @elseif(\Carbon\Carbon::today()->format('l') == 'Sunday')
                                @if(empty($salon->sundayOpen))
                                    <p>Zatvoreno</p>
                                @else
                                    <p><i class="far fa-clock"></i> Otvoreno {{ date('h:i A', strtotime($salon->sundayOpen)) }} -  {{ date('h:i A', strtotime($salon->sundayClose)) }}.</p>
                                @endif
                            @else
                                @if(empty($salon->workdaysOpen))
                                    <p>Zatvoreno</p>
                                @else
                                    <p><i class="far fa-clock"></i> Otvoreno {{ date('h:i A', strtotime($salon->workdaysOpen)) }} -  {{ date('h:i A', strtotime($salon->workdaysClose)) }}.</p>
                                @endif
                            @endif

                        </div>
                        <ul class="opening-hours">
                            <li class="d-flex justify-content-between">
                                <p>Ponedeljak</p>
                                @if(empty($salon->workdaysOpen))
                                    <p>Zatvoreno</p>
                                @else
                                    <p> {{ date('h:i A', strtotime($salon->workdaysOpen)) }} -  {{ date('h:i A', strtotime($salon->workdaysClose)) }}</p>
                                @endif
                            </li>
                            <li class="d-flex justify-content-between">
                                <p>Utorak</p>
                                @if(empty($salon->workdaysOpen))
                                    <p>Zatvoreno</p>
                                @else
                                    <p> {{ date('h:i A', strtotime($salon->workdaysOpen)) }} -  {{ date('h:i A', strtotime($salon->workdaysClose)) }}</p>
                                @endif
                            </li>
                            <li class="d-flex justify-content-between">
                                <p>Srijeda</p>
                                @if(empty($salon->workdaysOpen))
                                    <p>Zatvoreno</p>
                                @else
                                    <p> {{ date('h:i A', strtotime($salon->workdaysOpen)) }} -  {{ date('h:i A', strtotime($salon->workdaysClose)) }}</p>
                                @endif
                            </li>
                            <li class="d-flex justify-content-between">
                                <p>Četvrtak</p>
                                @if(empty($salon->workdaysOpen))
                                    <p>Zatvoreno</p>
                                @else
                                    <p> {{ date('h:i A', strtotime($salon->workdaysOpen)) }} -  {{ date('h:i A', strtotime($salon->workdaysClose)) }}</p>
                                @endif
                            </li>
                            <li class="d-flex justify-content-between">
                                <p>Petak</p>
                                @if(empty($salon->workdaysOpen))
                                    <p>Zatvoreno</p>
                                @else
                                    <p> {{ date('h:i A', strtotime($salon->workdaysOpen)) }} -  {{ date('h:i A', strtotime($salon->workdaysClose)) }}</p>
                                @endif
                            </li>
                            <li class="d-flex justify-content-between">
                                <p><b>Subota</b></p>
                                @if(empty($salon->saturdayOpen))
                                    <p>Zatvoreno</p>
                                @else
                                    <p> {{ date('h:i A', strtotime($salon->saturdayOpen)) }} -  {{ date('h:i A', strtotime($salon->saturdayClose)) }}</p>
                                @endif
                            </li>
                            <li class="d-flex justify-content-between">
                                <p>Nedelja</p>
                                @if(empty($salon->sundayOpen))
                                    <p>Zatvoreno</p>
                                @else
                                    <p> {{ date('h:i A', strtotime($salon->sundayOpen)) }} -  {{ date('h:i A', strtotime($salon->sundayClose)) }}</p>
                                @endif
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
                <google-map :latitude="{{ $salon->latitude }}" :longitude="{{ $salon->longitude }}"></google-map>
            </div>
        </div>
    </section>

    @if($salon->services && count($salon->services) > 0)
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
                                <p>Cijena:</p>
                                <h4>{{ $service->price }}€</h4>
                            </div>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </section>

    <fullscreen-modal :salon="{{ $salon }}"></fullscreen-modal>
    @endif

    <comments :salon="{{ $salon }}"></comments>

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