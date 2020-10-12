@if($similar && count($similar) > 0)
    <section class="section section-padding smaller">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="section-title mb-5">Pogledajte ostalo</h1>
                </div>
                @foreach ($similar as $salon)
                    <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                        <!-- salon_card -->
                        <div class="card salon-card">
                            <a href="/salon-details/{{ $salon->id }}" class="salon-link">
                                <img class="card-img-top" src="/img/hotels/ibero.png" alt="Card image">
                            </a>
                            <div class="card-body pb-0">
                                <a href="/salon-details/{{ $salon->id }}" class="hoverable-link">
                                    <h4 class="card-title">{{ $salon->name }}</h4>
                                </a>
                                <cite>{{ $salon->address }}, {{ $salon->city->name }}</cite>
                                <div class="score-wrap">
                                    <span class="stars-active" style="width:88%">
                                       @foreach(range(1, $salon->stars) as $i)
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        @endforeach
                                        @if($salon->stars < 5)
                                            @foreach(range(1, 5 - $salon->stars) as $i)
                                                <i class="fa fa-star dark" aria-hidden="true"></i>
                                            @endforeach
                                        @endif
                                    </span>
                                </div>
                                <div class="salon-statuses d-flex">
                                    @foreach ($salon->statuses as $status)
                                        <h4>
                                            <a href=""
                                               class="badge badge-primary {{ $status->name }}">{{ $status->name }}</a>
                                        </h4>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        <!-- salon_card_end -->
                    </div>
                @endforeach
            </div>
        </div>
    </section>
@endif