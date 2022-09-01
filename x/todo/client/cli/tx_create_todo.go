package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"todo/x/todo/types"
)

var _ = strconv.Itoa(0)

func CmdCreateTodo() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-todo [what] [done] [priority]",
		Short: "Broadcast message createTodo",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argWhat := args[0]
			argDone := args[1]
			argPriority := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateTodo(
				clientCtx.GetFromAddress().String(),
				argWhat,
				argDone,
				argPriority,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
