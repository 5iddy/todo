package keeper

import (
	"todo/x/todo/types"
)

var _ types.QueryServer = Keeper{}
