import { render } from "@testing-library/react";
import IptrackerApp from "./IptrackerApp";

describe(IptrackerApp, () => {
  it("lpcalIp should be a string", () => {
    const { getAllByDisplayValue } = render(
      <IptrackerApp localIp={typeof string} />
    );
    const localIpValue = getAllByDisplayValue("localIp").textContent;
    expect(localIpValue).toBeUndefined();
  });
});
