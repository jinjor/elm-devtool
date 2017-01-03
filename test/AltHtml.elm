module AltHtml exposing (..)

import Json.Decode as D exposing (Decoder)
import VirtualDom exposing (..)


beginnerProgram
  : { model : model
    , view : model -> Html msg
    , update : msg -> model -> model
    }
  -> Program Never model msg
beginnerProgram {model, view, update} =
  program
    { init = model ! []
    , update = \msg model -> update msg model ! []
    , view = view
    , subscriptions = \_ -> Sub.none
    }

program
  : { init : (model, Cmd msg)
    , update : msg -> model -> (model, Cmd msg)
    , subscriptions : model -> Sub msg
    , view : model -> Html msg
    }
  -> Program Never model msg
program =
  VirtualDom.program


map : (a -> msg) -> Node a -> Node msg
map =
  VirtualDom.map

---

type alias Html msg = Node msg

type alias Attribute msg = VirtualDom.Property msg


text : String -> Html msg
text =
  VirtualDom.text


div : List (Attribute msg) -> List (Node msg) -> Node msg
div =
  node "div"


button : List (Attribute msg) -> List (Node msg) -> Node msg
button =
  node "button"


hr : List (Attribute msg) -> List (Node msg) -> Node msg
hr =
  node "hr"


---

style : List (String, String) -> Attribute msg
style =
  VirtualDom.style


---


on : String -> Decoder msg -> Attribute msg
on =
  VirtualDom.on


onClick : msg -> Attribute msg
onClick msg =
  on "click" (D.succeed msg)
