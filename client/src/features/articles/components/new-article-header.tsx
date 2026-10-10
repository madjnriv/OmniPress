import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FlimSlateIcon,
  CarouselHorizontal02Icon,
} from "@hugeicons/core-free-icons";

interface NewArticleHeaderProps {
  tab: string;
  handleTabChange: ((value: string) => void) | undefined;
}
export const NewArticleHeader = ({
  handleTabChange,
  tab,
}: NewArticleHeaderProps) => {
  return (
    <Tabs value={tab} className="w-full" onValueChange={handleTabChange}>
      <TabsList variant="line">
        <TabsTrigger value="REELS">
          Reels
          <HugeiconsIcon icon={FlimSlateIcon} />
        </TabsTrigger>
        <TabsTrigger value="POSTS">
          Post
          <HugeiconsIcon icon={CarouselHorizontal02Icon} />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
