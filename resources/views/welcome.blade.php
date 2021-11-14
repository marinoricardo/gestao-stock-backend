<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Gestao de Produtos</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    {{-- <link rel="shortcut icon" href="{{asset('/img/logo_png/Absa_Logo_Human.png')}}" type="image/x-icon"> --}}
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

</head>

<body>
    <div id="app">
        <!-- <v-container class="fill-height" fluid style="height: 100vh">
            <v-row class="fill-height">
                <v-col cols="12">
                    <router-view></router-view>
                </v-col>
            </v-row>

        </v-container> -->
        <example-component></example-component>
        {{-- <loader></loader>
        <router-view></router-view> --}}
    </div>
    <script src="{{ asset('js/app.js')}}"></script>
</body>

</html>