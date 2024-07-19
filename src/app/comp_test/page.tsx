// for visual testing

import Badge from "~/components/common/Badge/Badge";
import BadgeInterface from "~/components/common/Badge/BadgeInterface";

// import badgeIcon from "~/public/check.png";

const page = () => {
  const bgP: BadgeInterface = {
    label: "error",
    variant: "error",
  };
  const bgP2: BadgeInterface = {
    label: "success",
    variant: "success",
    icon: <span>&#11042;</span>,
  };
  const bgP3: BadgeInterface = {
    label: "primary",
    variant: "primary",
  };
  const bgP4: BadgeInterface = {
    label: "default",
    variant: "default",
    icon: <span>&#11042;</span>,
  };

  return (
    <div className="p-12">
      <div className="py-4">
        <h1 className="font-bold text-2xl py-6 text-slate-700">
          This is a dummy page to show the usage of the badge component
        </h1>
        <p>
          This page does not exist on the branch to be merged to main, and is
          solely for documentation purposes.
        </p>
        <ul className="my-4 font-medium text-l">
          <h4>This component has 4 variants: </h4>
          <li>
            - Default: A default slate coloured label (and icon if specified)
            with with a lighter slate background
          </li>
          <li>
            - Primary: An orange coloured label (and icon if specified) with a
            lighter orange background
          </li>
          <li>
            - Success: A green coloured label (and icon if specified) with a
            lighter green background
          </li>
          <li>
            - Error: A red coloured label (and icon if specified) with a lighter
            red background
          </li>
        </ul>
        <ul className="my-4 font-medium text-l">
          It accepts 2 mandatory &quot;label&quot; and &quot;variant&quot;
          arguments, and 1 optional &quot;icon&quot; argument as props.
          <li>- Label: string</li>
          <li>
            - Variant: &quot;default&quot; | &quot;primary&quot; |
            &quot;success&quot; | &quot;error&quot;
          </li>
          <li>- Icon?: React.ReactNode</li>
        </ul>
        <h4 className="font-bold text-l text-slate-700">
          Kindly refer to this{" "}
          <a
            className="underline text-slate-400 hover:text-slate-500"
            href="https://github.com/OvyEvbodi/hng_boilerplate_nextjs/tree/feat/HNG-183-create-badge-component"
          >
            README
          </a>{" "}
          for more usage information
        </h4>
      </div>
      <div className="bg-slate-600 flex flex-wrap justify-center gap-10 items-center py-24">
        <Badge {...bgP} />
        <Badge {...bgP2} />
        <Badge {...bgP3} />
        <Badge {...bgP4} />
      </div>
    </div>
  );
};

export default page;
