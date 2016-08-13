module Main exposing (..)

import Html exposing (Html, button, div, text)
import Html.App exposing (beginnerProgram)
import Html.Events exposing (onClick)
import Foo


main =
    Html.App.beginnerProgram
        { model = model
        , view = view
        , update = update
        }



-- model


type alias Model =
    Int


model : Model
model =
    0



--update


type Msg
    = Increment
    | Decrement


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            model + 1

        Decrement ->
            model - 1



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Decrement ] [ text "-" ]
        , div [] [ text ((toString model) ++ Foo.bar) ]
        , button [ onClick Increment ] [ text "+" ]
        ]
