@extends('layouts.website')

@section('content')

    <bradcam title="Verify registration"></bradcam>

    <section class="section section-padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            <p>{{ __('A fresh verification link has been sent to your email address.') }}</p>
                        </div>
                    @endif

                    <p>
                        Na email adresi je poslat link za verifikaciju Vašeg naloga.
                        U slučaju da link ne stigne u narednih 5 minuta, provjerite SPAM folder ili nam pišite na email
                        <a href="mailto:info@mojtermin.me" class="accent">info@mojtermin.me</a>.
                    </p>
                    <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                        @csrf
                        <button type="submit" class="genric-btn info circle">Zatraži novi link</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection
