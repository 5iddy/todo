/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "todo.todo";

export interface MsgCreateTodo {
  creator: string;
  what: string;
  done: string;
  priority: string;
}

export interface MsgCreateTodoResponse {}

const baseMsgCreateTodo: object = {
  creator: "",
  what: "",
  done: "",
  priority: "",
};

export const MsgCreateTodo = {
  encode(message: MsgCreateTodo, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.what !== "") {
      writer.uint32(18).string(message.what);
    }
    if (message.done !== "") {
      writer.uint32(26).string(message.done);
    }
    if (message.priority !== "") {
      writer.uint32(34).string(message.priority);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTodo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTodo } as MsgCreateTodo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.what = reader.string();
          break;
        case 3:
          message.done = reader.string();
          break;
        case 4:
          message.priority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTodo {
    const message = { ...baseMsgCreateTodo } as MsgCreateTodo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.what !== undefined && object.what !== null) {
      message.what = String(object.what);
    } else {
      message.what = "";
    }
    if (object.done !== undefined && object.done !== null) {
      message.done = String(object.done);
    } else {
      message.done = "";
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = String(object.priority);
    } else {
      message.priority = "";
    }
    return message;
  },

  toJSON(message: MsgCreateTodo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.what !== undefined && (obj.what = message.what);
    message.done !== undefined && (obj.done = message.done);
    message.priority !== undefined && (obj.priority = message.priority);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateTodo>): MsgCreateTodo {
    const message = { ...baseMsgCreateTodo } as MsgCreateTodo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.what !== undefined && object.what !== null) {
      message.what = object.what;
    } else {
      message.what = "";
    }
    if (object.done !== undefined && object.done !== null) {
      message.done = object.done;
    } else {
      message.done = "";
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = object.priority;
    } else {
      message.priority = "";
    }
    return message;
  },
};

const baseMsgCreateTodoResponse: object = {};

export const MsgCreateTodoResponse = {
  encode(_: MsgCreateTodoResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTodoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTodoResponse } as MsgCreateTodoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateTodoResponse {
    const message = { ...baseMsgCreateTodoResponse } as MsgCreateTodoResponse;
    return message;
  },

  toJSON(_: MsgCreateTodoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateTodoResponse>): MsgCreateTodoResponse {
    const message = { ...baseMsgCreateTodoResponse } as MsgCreateTodoResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateTodo(request: MsgCreateTodo): Promise<MsgCreateTodoResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateTodo(request: MsgCreateTodo): Promise<MsgCreateTodoResponse> {
    const data = MsgCreateTodo.encode(request).finish();
    const promise = this.rpc.request("todo.todo.Msg", "CreateTodo", data);
    return promise.then((data) =>
      MsgCreateTodoResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
