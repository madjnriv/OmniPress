import { HugeiconsIcon } from "@hugeicons/react";
import {
  LinkOffIcon,
  PlusIcon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/shared/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/shared/components/ui/empty";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <HugeiconsIcon icon={LinkOffIcon} />
          </EmptyMedia>
          <EmptyTitle>Page not found</EmptyTitle>
          <EmptyDescription>
            The page you are looking for does not exist or has been moved.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>
            <Link to="/">Explore Feed</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/articles/new">
              <HugeiconsIcon icon={PlusIcon} /> <span>New Article</span>
            </Link>
          </Button>
        </EmptyContent>
        <Button
          variant="link"
          className="text-muted-foreground"
          size="sm"
          asChild
        >
          <Link to="/search">
            Find an Article <HugeiconsIcon icon={ArrowUpRight01Icon} />
          </Link>
        </Button>
      </Empty>
    </div>
  );
}

export default PageNotFound;
