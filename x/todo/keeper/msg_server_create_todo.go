package keeper

import (
	"context"

	"todo/x/todo/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateTodo(goCtx context.Context, msg *types.MsgCreateTodo) (*types.MsgCreateTodoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateTodoResponse{}, nil
}
