import { Tabs, TabsContent } from "@/shared/components/ui/tabs";
import { useOutletContext } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { NewArticleHeader } from "@/features/articles";

const NewArticle = () => {
  const [tab, setTab] = useState<string>("REELS");
  const { setHeaderActions } = useOutletContext<{
    setHeaderActions: (node: React.ReactNode) => void;
  }>();

  const handleTabChange = useCallback((value: string) => {
    setTab(value);
  }, []);

  useEffect(() => {
    setHeaderActions(
      <NewArticleHeader handleTabChange={handleTabChange} tab={tab} />,
    );
  }, [handleTabChange, setHeaderActions, tab]);

  useEffect(() => {
    return () => setHeaderActions(null);
  }, [setHeaderActions]);
  return (
    <div className="lg:w-[50%] mx-auto">
      <Tabs value={tab} className="w-full">
        <TabsContent value="REELS">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="POSTS">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default NewArticle;
