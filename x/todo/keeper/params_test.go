package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "todo/testutil/keeper"
	"todo/x/todo/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.TodoKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
