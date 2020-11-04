defmodule BinarySequenece do
  def run(number) do
    sequences =
      number
      |> number_to_binary("")
      |> String.split(~r/1+/, trim: true)

    if length(sequences) > 1 do
      Enum.map(sequences, fn seq ->
        String.length(seq)
      end)
      |> Enum.max()
    else
      0
    end
  end

  defp number_to_binary(number, result) when number > 0 do
    quotient = div(number, 2)
    reminder = rem(number, 2)
    result = to_string(reminder) <> result
    number_to_binary(quotient, result)
  end

  defp number_to_binary(quotient, result) when quotient == 0, do: result
end
