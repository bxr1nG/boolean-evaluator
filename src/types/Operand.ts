import type Value from "../classes/Value";
import type And from "../classes/And";
import type Or from "../classes/Or";
import type Not from "../classes/Not";

type Operand = Value | And | Or | Not;

export default Operand;
