<!-- testmonial_area  -->
<div class="testmonial_area py-5">
    <div class="container py-5">
        <div class="col-xl-12">
            <div class="testmonial_active owl-carousel">

                @foreach($testimonials as $testimonial)
                    <div class="single_testmonial text-center wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".3s">
                        <div class="section_title">
                            <h3>Zašto su drugi izabrali<br>MojTermin?</h3>
                        </div>
                        <p>{{ $testimonial->text }}</p>

                        <div class="rating_author">
                            @foreach(range(1, $testimonial->stars) as $i)
                                <i class="fa fa-star" aria-hidden="true"></i>
                            @endforeach
                            @if($testimonial->stars < 5)
                                @foreach(range(1, 5 - $testimonial->stars) as $i)
                                    <i class="fa fa-star dark" aria-hidden="true"></i>
                                @endforeach
                            @endif
                            <span class="ml-2">{{ $testimonial->author }}</span>
                        </div>
                    </div>
                @endforeach

            </div>
        </div>
    </div>
</div>
<!--/ testmonial_area  -->