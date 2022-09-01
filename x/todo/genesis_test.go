package todo_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "todo/testutil/keeper"
	"todo/testutil/nullify"
	"todo/x/todo"
	"todo/x/todo/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TodoKeeper(t)
	todo.InitGenesis(ctx, *k, genesisState)
	got := todo.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
