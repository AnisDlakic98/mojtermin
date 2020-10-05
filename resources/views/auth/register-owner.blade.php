@extends('layouts.website')

@section('content')

    <bradcam title="Registracija"></bradcam>

    <!-- registration_start -->
    <section class="contact-section">
        <div class="container">
            <div class="row">
                <div class="col-md-8 mx-auto">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a href="/register-customer" class="nav-link" aria-selected="false">Kao korisnik</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                               role="tab" aria-controls="pills-home" aria-selected="true">Registruj moj salon</a>
                        </li>
                    </ul>


                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                             aria-labelledby="pills-home-tab">
                            <form class="form-contact contact_form" action="{{ route('register') }}" method="POST"
                                  id="contactForm">
                                @csrf
                                <input type="hidden" id="registerType" name="registerType" value="owner"/>
                                <h2 class="contact-title">Korisnički detalji</h2>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text"
                                                   placeholder="Ime i prezime"
                                                   onfocus="this.placeholder = ''"
                                                   onblur="this.placeholder = 'Ime i prezime'"
                                                   value="{{ old('name') }}"
                                                   name="name"
                                                   id="name"
                                                   class="form-control @error('name') is-invalid @enderror"

                                            >
                                            @error('name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text"
                                                   placeholder="Email adresa"
                                                   onfocus="this.placeholder = ''"
                                                   onblur="this.placeholder = 'Email adresa'"
                                                   value="{{ old('email') }}"
                                                   name="email"
                                                   id="email"
                                                   class="form-control @error('email') is-invalid @enderror"
                                            >
                                            @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="password"
                                                   placeholder="Unesite lozinku"
                                                   onfocus="this.placeholder = ''"
                                                   onblur="this.placeholder = 'Unesite lozinku'"
                                                   value="{{ old('password') }}"
                                                   name="password"
                                                   id="password"
                                                   class="form-control @error('password') is-invalid @enderror"
                                            >
                                            @error('password')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="password"
                                                   placeholder="Ponovi lozinku"
                                                   onfocus="this.placeholder = ''"
                                                   onblur="this.placeholder = 'Ponovi lozinku'"
                                                   value="{{ old('password_confirmation') }}"
                                                   name="password_confirmation"
                                                   id="password_confirmation"
                                                   class="form-control @error('password-confirm') is-invalid @enderror"
                                            >
                                            @error('password_confirmation')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                    </div>

                                </div>
                                <h2 class="contact-title">Detalji o salonu</h2>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text"
                                                   placeholder="Naziv Salona *"
                                                   onfocus="this.placeholder = ''"
                                                   onblur="this.placeholder = 'Naziv Salona *'"
                                                   value="{{ old('salon_name') }}"
                                                   name="salon_name"
                                                   id="salon_name"
                                                   class="form-control @error('salon_name') is-invalid @enderror"
                                            >
                                            @error('salon_name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <select name="category" class="form-control @error('category') is-invalid @enderror">
                                                @foreach($categories as $category)
                                                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                                                @endforeach
                                            </select>
                                            @error('category')
                                            <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <select name="country" class="form-control browser-default custom-select" id="countriesSelect">
                                                @foreach($countries as $country)
                                                    <option value="{{ $country->id }}">{{ $country->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>

                                    </div>
                                    <div class="col-md-6">
                                        <div class=" form-group">
                                            <select name="city" class="form-control">
                                                @foreach($cities as $city)
                                                    <option value="{{ $city->id }}">{{ $city->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <input type="text"
                                                   placeholder="Adresa Salona *"
                                                   onfocus="this.placeholder = ''"
                                                   onblur="this.placeholder = 'Adresa Salona *'"
                                                   value="{{ old('salon_address') }}"
                                                   name="salon_address"
                                                   id="salon_address"
                                                   class="form-control @error('salon_address') is-invalid @enderror"
                                            >
                                            @error('salon_address')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text"
                                                   placeholder="Websajt (opciono)"
                                                   onfocus="this.placeholder = ''"
                                                   onblur="this.placeholder = 'Websajt (opciono)'"
                                                   value="{{ old('salon_address') }}"
                                                   name="website"
                                                   id="website"
                                                   class="form-control @error('website') is-invalid @enderror"
                                            >
                                            @error('website')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text"
                                                   placeholder="Broj telefona *"
                                                   onfocus="this.placeholder = ''"
                                                   onblur="this.placeholder = 'Broj telefona *'"
                                                   value="{{ old('phone_number') }}"
                                                   name="phone_number"
                                                   id="phone_number"
                                                   class="form-control @error('phone_number') is-invalid @enderror"
                                            >
                                            @error('phone_number')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mt-3 d-flex justify-content-center">
                                    <button type="submit" class="button button-contactForm boxed-btn">Registruj se
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- registration_end -->
@endsection

@section('scripts')

    <script>
        $(function () {
            var url = 'country/1/cities/';
            axios.get(url).then((response) => {
                var select = $('select[name=city]');
                select.empty();
                response.data.forEach((item) => {
                    select.append('<option value=' + item.id + '>' + item.name + '</option>');
                });
            }).catch((error) => {
                console.log(error);
            });
            getCitiesByCountry();
        });

        function getCitiesByCountry() {
            $('#countriesSelect').change(function () {
                var url = '{{ url('country') }}/' + $(this).val() + '/cities/';
                axios.get(url).then((response) => {
                    var select = $('select[name=city]');
                    select.empty();
                    response.data.forEach((item) => {
                        select.append('<option value=' + item.id + '>' + item.name + '</option>');
                    });
                }).catch((error) => {
                    console.log(error);
                });
            });
        }
    </script>

@stop
